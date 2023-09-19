import Link from "next/link";
import { getProductCategories, getProductCategoryBySlug } from "../../utils/wordpress";

/**
 * Create the three view
 * @param list 
 * @returns 
 */
export function CreateTree(list) {
    var map = {}, node, roots = [], i;

    for (i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent !== 0) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

/**
 * 
 * @param items 
 * @returns 
 */
export function TreeRender(items, category_id = null, parents = []) {
    return (
        <>
            {items.map((data, index) => (
                <li className={`product-cat-id-${data.id} product-parent-cat-id-${data.parent} ml-4 mb-2 mt-2`} key={index}>
                    <Link href={'/category/' + data.slug}
                        data-category-id={data.id}
                        data-category-parent={data.parent}
                    >{data.name}</Link>
                    {data.children.length > 0 &&
                        <ul className={"product-children " + (parents.find((parentValue) => parentValue == data.id) ? 'show' : 'hidden')}>
                            {TreeRender(data.children, category_id, parents)}
                        </ul>
                    }
                </li>
            ))}
        </>
    )
}

async function getCategory(slug) {
    return getProductCategoryBySlug(slug);
}

async function getData() {
    return getProductCategories({
        per_page: 100,
        order: 'asc',
        orderby: 'name',
    });
}

export default function ListProductCategories({ categories = [], category = null }) {
    const tree = CreateTree(categories);
    let category_id = category && category.id !== undefined ? category.id : null;
    const getAncestors = (target, children, ancestors = []) => {
        for (let node of children) {
            if (node.id === target) {
                return ancestors.concat(node.id);
            }
            const found = getAncestors(target, node.children, ancestors.concat(node.id));
            if (found) {
                return found;
            }
        }
        return undefined;
    };

    const parentsList = getAncestors(category_id, tree);
    return (
        <div className="bg-slate-300 mr-4 pt-4 pb-4">
            <ul>
                {TreeRender(tree, category_id, parentsList)}
            </ul>
        </div>

    )
}