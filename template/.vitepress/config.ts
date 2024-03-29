import { defineConfig } from "vitepress";
import markdownItGitbookPlugin from 'markdown-it-plugin-gitbook'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "zh-CN",
	title: "飞布产品手册",
	titleTemplate: ":title - 飞布",
	srcDir: "./docs",
	description:
		'飞布是中国版Hasura。它从后端切入，专注API开发，是开发体验优先的可视化API开发平台，前后端开发者都能使用飞布构建生产级WEB API，从而让"前端变全栈，后端不搬砖"',
	locales: {
		root: {
			label: "English",
			lang: "en",
		},
		zh: {
			label: "中文",
			lang: "zh",
			link: "/zh",
		},
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "官网", link: "https://fireboom.io" },
			{ text: "B站", link: "https://space.bilibili.com/3493080529373820" },
		],
		sidebar: [
			{ text: "序言", link: "/" },
			{ text: "更新日志", link: "geng-xin-ri-zhi" },
			{
				text: "产品简介",
				link: "README (1)",
				items: [
					{
						text: "什么是飞布？",
						link: "product-introduction/what-is-fireboom",
					},
					{
						text: "飞布的价值",
						link: "product-introduction/the-value-of-fireboom",
					},
					{
						text: "飞布的优势",
						link: "product-introduction/the-advantage-of-fireboom",
					},
					{
						text: "应用场景",
						link: "product-introduction/application-scenario",
					},
					{ text: "数据安全", link: "product-introduction/data-security" },
					{ text: "产品案例", link: "product-introduction/product-case" },
				],
				collapsed: true,
			},
			{
				text: "快速入门",
				link: "kuai-su-ru-men/README",
				items: [
					{ text: "初识飞布", link: "kuai-su-ru-men/chu-shi-fei-bu" },
					{
						text: "快速上手",
						link: "kuai-su-ru-men/kuai-su-shang-shou/README",
						items: [
							{
								text: "图文版",
								link: "kuai-su-ru-men/kuai-su-shang-shou/tu-wen-ban",
							},
						],
						collapsed: false,
					},
					{ text: "词汇概览", link: "kuai-su-ru-men/ci-hui-gai-lan" },
					{ text: "工作原理", link: "kuai-su-ru-men/gong-zuo-yuan-li" },
				],
				collapsed: true,
			},
			{
				text: "概览",
				link: "ji-chu-ke-shi-hua-kai-fa/gai-lan/README",
				items: [
					{ text: "CLI", link: "ji-chu-ke-shi-hua-kai-fa/gai-lan/cli" },
					{
						text: "控制台",
						link: "ji-chu-ke-shi-hua-kai-fa/gai-lan/jie-mian-gai-lan/README",
						items: [
							{
								text: "主功能区",
								link: "ji-chu-ke-shi-hua-kai-fa/gai-lan/jie-mian-gai-lan/ke-shi-hua-kai-fa",
							},
						],
						collapsed: false,
					},
				],
				collapsed: true,
			},
			{
				text: "数据源",
				link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/README",
				items: [
					{
						text: "数据库",
						link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/shu-ju-ku/README",
						items: [
							{
								text: "数据库连接",
								link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/shu-ju-ku/shu-ju-ku-lian-jie/README",
								items: [
									{
										text: "高级设置",
										link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/shu-ju-ku/shu-ju-ku-lian-jie/gao-ji-she-zhi",
									},
								],
								collapsed: false,
							},
							{
								text: "数据建模",
								link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/shu-ju-ku/shu-ju-jian-mo",
							},
							{
								text: "数据预览",
								link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/shu-ju-ku/shu-ju-yu-lan",
							},
						],
						collapsed: false,
					},
					{
						text: "REST 数据源",
						link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/rest-api",
					},
					{
						text: "GraphQL 数据源",
						link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/graphql-api",
					},
					{
						text: "消息队列",
						link: "ji-chu-ke-shi-hua-kai-fa/shu-ju-yuan/xiao-xi-dui-lie",
					},
				],
				collapsed: true,
			},
			{
				text: "API构建",
				link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/README",
				items: [
					{
						text: "可视化构建",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/ke-shi-hua-gou-jian/README",
						items: [
							{
								text: "API规范",
								link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/ke-shi-hua-gou-jian/api-gui-fan",
							},
						],
						collapsed: false,
					},
					{
						text: "批量新建",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/ding-yue",
					},
					{
						text: "HTTP请求流程指令",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/api-zhi-ling",
					},
					{
						text: "使用API",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/shi-yong-api",
					},
					{
						text: "实时查询",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/shi-shi-cha-xun",
					},
					{
						text: "实时推送",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/shi-shi-tui-song",
					},
					{
						text: "关联查询",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/kua-yuan-guan-lian",
					},
					{
						text: "数据缓存",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/shu-ju-huan-cun",
					},
					{
						text: "常见用例",
						link: "ji-chu-ke-shi-hua-kai-fa/api-gou-jian/chang-jian-yong-li",
					},
				],
				collapsed: true,
			},
			{
				text: "身份验证",
				link: "ji-chu-ke-shi-hua-kai-fa/shen-fen-yan-zheng/README",
				items: [
					{
						text: "授权码模式",
						link: "ji-chu-ke-shi-hua-kai-fa/shen-fen-yan-zheng/shou-quan-ma-mo-shi/README",
						items: [
							{
								text: "身份验证（废弃）",
								link: "ji-chu-ke-shi-hua-kai-fa/yan-zheng-he-shou-quan/shen-fen-yan-zheng",
							},
						],
						collapsed: false,
					},
					{
						text: "隐式模式",
						link: "ji-chu-ke-shi-hua-kai-fa/shen-fen-yan-zheng/yin-shi-mo-shi",
					},
					{
						text: "数据权限控制",
						link: "ji-chu-ke-shi-hua-kai-fa/shen-fen-yan-zheng/shu-ju-quan-xian-kong-zhi",
					},
				],
				collapsed: true,
			},
			{
				text: "身份授权",
				link: "ji-chu-ke-shi-hua-kai-fa/yan-zheng-he-shou-quan/README",
				items: [
					{
						text: "RBAC",
						link: "ji-chu-ke-shi-hua-kai-fa/yan-zheng-he-shou-quan/rbac/README",
						items: [
							{
								text: "授权与访问控制（废弃）",
								link: "ji-chu-ke-shi-hua-kai-fa/yan-zheng-he-shou-quan/rbac/shou-quan-yu-fang-wen-kong-zhi",
							},
						],
						collapsed: false,
					},
					{
						text: "接口权限控制",
						link: "ji-chu-ke-shi-hua-kai-fa/yan-zheng-he-shou-quan/jie-kou-quan-xian-kong-zhi",
					},
					{
						text: "开放API",
						link: "ji-chu-ke-shi-hua-kai-fa/yan-zheng-he-shou-quan/kai-fang-api",
					},
				],
				collapsed: true,
			},
			{
				text: "文件存储",
				link: "ji-chu-ke-shi-hua-kai-fa/wen-jian-cun-chu/README",
				items: [
					{
						text: "S3配置及使用",
						link: "ji-chu-ke-shi-hua-kai-fa/wen-jian-cun-chu/s3-pei-zhi-ji-shi-yong",
					},
					{
						text: "文件管理面板",
						link: "ji-chu-ke-shi-hua-kai-fa/wen-jian-cun-chu/wen-jian-guan-li-mian-ban",
					},
					{
						text: "高级配置：profile",
						link: "ji-chu-ke-shi-hua-kai-fa/wen-jian-cun-chu/gao-ji-pei-zhi-profile",
					},
				],
				collapsed: true,
			},
			{ text: "钩子概览", link: "jin-jie-gou-zi-ji-zhi/gou-zi-ji-zhi" },
			{
				text: "启动钩子",
				link: "jin-jie-gou-zi-ji-zhi/qi-dong-gou-zi/README",
				items: [
					{
						text: "Node钩子",
						link: "jin-jie-gou-zi-ji-zhi/qi-dong-gou-zi/node-gou-zi",
					},
					{
						text: "Golang钩子",
						link: "jin-jie-gou-zi-ji-zhi/qi-dong-gou-zi/golang-gou-zi",
					},
					{
						text: "Python钩子",
						link: "jin-jie-gou-zi-ji-zhi/qi-dong-gou-zi/python-gou-zi",
					},
					{
						text: "Java钩子",
						link: "jin-jie-gou-zi-ji-zhi/qi-dong-gou-zi/java-gou-zi",
					},
				],
				collapsed: true,
			},
			{ text: "OPERATION钩子", link: "jin-jie-gou-zi-ji-zhi/operation-gou-zi" },
			{
				text: "身份验证钩子",
				link: "jin-jie-gou-zi-ji-zhi/shen-fen-yan-zheng-gou-zi",
			},
			{ text: "graphql钩子", link: "jin-jie-gou-zi-ji-zhi/graphql-gou-zi" },
			{
				text: "函数钩子",
				link: "jin-jie-gou-zi-ji-zhi/han-shu-gou-zi/README",
				items: [
					{
						text: "functions（废弃）",
						link: "jin-jie-gou-zi-ji-zhi/han-shu-gou-zi/zu-he-shi-api",
					},
					{
						text: "proxys(废弃)",
						link: "jin-jie-gou-zi-ji-zhi/han-shu-gou-zi/proxys-fei-qi",
					},
				],
				collapsed: true,
			},
			{
				text: "文件上传钩子",
				link: "jin-jie-gou-zi-ji-zhi/wen-jian-shang-chuan-gou-zi",
			},
			{ text: "内部调用", link: "jin-jie-gou-zi-ji-zhi/nei-bu-tiao-yong" },
			{
				text: "部署运维",
				link: "shi-yong-bu-shu-shang-xian/bu-shu-yun-wei/README",
				items: [
					{
						text: "手动部署",
						link: "shi-yong-bu-shu-shang-xian/bu-shu-yun-wei/shou-dong-bu-shu/README",
						items: [
							{
								text: "流水线部署（废弃）",
								link: "shi-yong-bu-shu-shang-xian/bu-shu-yun-wei/shou-dong-bu-shu/liu-shui-xian-bu-shu",
							},
						],
						collapsed: false,
					},
					{
						text: "Docker部署",
						link: "shi-yong-bu-shu-shang-xian/bu-shu-yun-wei/docker-bu-shu",
					},
					{
						text: "飞布云",
						link: "shi-yong-bu-shu-shang-xian/bu-shu-yun-wei/fei-bu-yun",
					},
				],
				collapsed: true,
			},
			{
				text: "接口安全",
				link: "shi-yong-bu-shu-shang-xian/security/README",
				items: [
					{
						text: "CSRF token 保护",
						link: "shi-yong-bu-shu-shang-xian/security/csrf-token-protection",
					},
					{
						text: "跨域访问",
						link: "shi-yong-bu-shu-shang-xian/security/kua-yu-fang-wen",
					},
				],
				collapsed: true,
			},
			{
				text: "客户端SDK",
				link: "shi-yong-bu-shu-shang-xian/sdk-sheng-cheng/README",
				items: [
					{
						text: "微信小程序SDK",
						link: "shi-yong-bu-shu-shang-xian/sdk-sheng-cheng/wei-xin-xiao-cheng-xu-sdk",
					},
					{
						text: "Flutter SDK",
						link: "shi-yong-bu-shu-shang-xian/sdk-sheng-cheng/flutter-sdk",
					},
					{
						text: "uniapp SDK",
						link: "shi-yong-bu-shu-shang-xian/sdk-sheng-cheng/uniapp-sdk",
					},
				],
				collapsed: true,
			},
			{
				text: "环境准备",
				link: "huan-jing-zhun-bei/README",
				items: [
					{
						text: "文件存储 S3",
						link: "huan-jing-zhun-bei/wen-jian-cun-chu-s3",
					},
					{
						text: "身份认证 OIDC",
						link: "huan-jing-zhun-bei/shen-fen-ren-zheng-oidc",
					},
					{ text: "NodeJs环境", link: "huan-jing-zhun-bei/nodejs-huan-jing" },
				],
				collapsed: true,
			},
			{
				text: "实战案例",
				link: "zui-jia-shi-jian/README",
				items: [
					{
						text: "Fireboom Admin",
						link: "zui-jia-shi-jian/fireboom-admin/README",
						items: [
							{
								text: "管理后台-refine(废弃)",
								link: "zui-jia-shi-jian/fireboom-admin/guan-li-hou-tai-refine",
							},
						],
						collapsed: false,
					},
					{ text: "实时TODO LIST", link: "zui-jia-shi-jian/shi-shi-todo-list" },
					{
						text: "语音版ChatGPT",
						link: "zui-jia-shi-jian/yu-yin-ban-chatgpt",
					},
					{
						text: "AI魔法师实战",
						link: "zui-jia-shi-jian/xiao-cheng-xu-shi-zhan",
					},
					{
						text: "阿里低代码引擎",
						link: "zui-jia-shi-jian/a-li-di-dai-ma-yin-qing",
					},
				],
				collapsed: true,
			},
			{ text: "路线图", link: "lu-xian-tu" },
			{
				text: "常见问题",
				link: "https://github.com/fireboomio/product-manual/discussions/categories/q-a",
			},
			{ text: "GraphQL", link: "he-xin-gai-nian/graphql" },
			{ text: "超图", link: "he-xin-gai-nian/chao-tu" },
			{ text: "请求时序图", link: "he-xin-gai-nian/qing-qiu-shi-xu-tu" },
			{ text: "服务端Operation", link: "he-xin-gai-nian/fu-wu-duan-operation" },
			{
				text: "钩子规范",
				link: "er-ci-kai-fa/gou-zi-gui-fan/README",
				items: [
					{
						text: "钩子规范bak",
						link: "er-ci-kai-fa/gou-zi-gui-fan/gou-zi-gui-fan",
					},
				],
				collapsed: true,
			},
			{ text: "模板规范", link: "er-ci-kai-fa/mo-ban-gui-fan" },
			{ text: "自定义模板", link: "er-ci-kai-fa/zi-ding-yi-mo-ban" },
			{
				text: "其它参考",
				link: "https://github.com/Echoidf/fireboom-notes/blob/main/SDK%E6%A8%A1%E6%9D%BF%E7%94%9F%E6%88%90%E6%96%87%E6%A1%A3",
			},
		],
		socialLinks: [{ icon: "github", link: "https://github.com/fireboomio" }],
	},
	vite: {
		server: {
			port: 7890,
		},
	},
  markdown: {
    config(md) {
      md.use(markdownItGitbookPlugin, {
        embedUrls: {}
      })
    }
  }
});
