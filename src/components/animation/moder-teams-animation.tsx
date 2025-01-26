import { IconCloud } from '@/components/ui/icon-cloud'

const slugs = [
	'typescript',
	'javascript',
	'dart',
	'java',
	'react',
	'flutter',
	'android',
	'html5',
	'css3',
	'nodedotjs',
	'express',
	'nextdotjs',
	'prisma',
	'amazonaws',
	'postgresql',
	'firebase',
	'nginx',
	'vercel',
	'testinglibrary',
	'jest',
	'cypress',
	'docker',
	'git',
	'jira',
	'github',
	'gitlab',
	'visualstudiocode',
	'androidstudio',
	'sonarqube',
	'figma',
]

export function IconCloudDemo() {
	const images = slugs.map(
		(slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
	)

	return (
		<div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
			<IconCloud images={images} />
		</div>
	)
}
