import {getRandomArrayElements} from "./utils";
const fs = require("fs");
const POST_DIRECTORY = "./_posts/";
const matter = require("gray-matter");
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

function importAll(r) {
	return r.keys().map(item => {
		const link = `${POST_DIRECTORY}${item.replace(/.\//, "")}`;
		const filecontents = fs.readFileSync(link, "utf-8");
		const {data, content} = matter(filecontents);
		return {
			link: item.substr(1).replace(/.mdx/, ""),
			data: {
				...data,
				date: dayjs(data.date).format("MMMM D, YYYY"),
				fromNow: dayjs(data.date).fromNow()
			},
			content
		};
	});
}

export const posts = () => {
	const allposts = importAll(require.context("./_posts/", true, /\.mdx$/));
	return allposts.sort((a, b) => dayjs(b.data.date) - dayjs(a.data.date));
};

//根据slug导出文章
export const GetPostBySlug = slug => {
	const realslug = "/" + slug.join("/");
	const allposts = posts();
	return allposts.find(post => post.link === realslug);
};

//根据tag导出随机文章
export const GetRandomPost = tag => {
	const TAG = Array.isArray(tag) ? tag : [tag];

	const _posts = posts().filter(item => {
		const ITEMTAG = Array.isArray(item) ? new Set(item) : new Set([item]);
	});
	return getRandomArrayElements(_posts, _posts.length < 6 ? _posts.length - 1 : 6);
};
