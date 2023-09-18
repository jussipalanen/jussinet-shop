import Link from "next/link";
import { getProductCategories, getProductCategory } from "../../utils/wordpress";
import { use } from "react";


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
export function TreeRender(items, listClass = '', category_id = null) {

    if (items.children === undefined && !items.children) {
        listClass = '';
    }

    return (
        <>
            {items.map((data, index) => (
                <li className={`product-cat-id-${data.id} product-parent-cat-id-${data.parent} ml-4`}>
                    <Link href={'/category/' + data.slug}
                        data-category-id={data.id}
                        data-category-parent={data.parent}
                    >{data.name}</Link>
                    {data.children.length > 0 &&
                        <ul className={"product-children " + (category_id == data.id || category_id == data.parent ? 'show' : 'hidden')}>
                            {TreeRender(data.children)}
                        </ul>
                    }
                </li>
            ))}
        </>
    )
}

export default function ListProductCategories({ category = null }) {
    const { posts } = use(getProductCategories({
        per_page: 100,
        order: 'asc',
        orderby: 'name',
    }));
    const tree = CreateTree(posts);
    let category_id = null;


    if (category) {
        const { post } = use(getProductCategory(category));
        if (post && post.id !== undefined) {
            category_id = post.id;
        }
    }

    return (
        <ul>
            {TreeRender(tree, '', category_id)}
        </ul>
    )
}