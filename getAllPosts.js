import matter from "gray-matter";
import dayjs from "dayjs";
import { join } from "path"
import fs from "fs"


//文章目录
const postDirectory = join(process.cwd(), '_posts');

function importAll(r) {
	return r.keys().map(fileName => ({
		link: fileName.substr(1).replace(/.md$/, ""),
		module: r(fileName)
	}));
}
const chunk = (arr, size) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);


const ALLFILES = importAll(require.context("./_posts/", true, /\.md$/));

const ALLPOSTS = ALLFILES.map(item => {
	const { data, content } = matter(item.module.default)
	return {
		link: item.link,
		data,
		content
	};
});



//导出所有slug
export const GetAllSlug = ALLFILES.map(item => item.link.substr(1).split("/"));

//导出所有文章
export const posts = ALLPOSTS.sort((a, b) => dayjs(b.data.date) - dayjs(a.data.date))

//导出所有标签
export const tags = [...new Set(ALLPOSTS.map(item => item.data.tags).flat(1))]


//导出所有文章
export const GetAllPosts = () => {
	return new Promise(resolve => {
		const files = importAll(require.context("./_posts/", true, /\.md$/));
		const allposts = files.map(item => {
			const { data, content } = matter(item.module.default)
			return {
				link: item.link,
				data,
				content
			};
		})
		resolve(allposts)
	})
}
//根据slug导出文章
export const GetPostBySlug = slug => {
	const realslug = slug.join("/");
	const fullpath = join(join(postDirectory, `${realslug}.md`))
	const filecontents = fs.readFileSync(fullpath, "utf-8");
	const { data, content } = matter(filecontents)
	return {
		data,
		content
	};
}
//根据tag展示文章
export const GetPostByTag = tag => {
	console.log(tag)
	return ALLPOSTS.filter(item => item.data.tags.includes(tag))
}

