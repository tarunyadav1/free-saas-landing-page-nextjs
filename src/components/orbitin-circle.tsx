import { OrbitingCircles } from '@/components/ui/orbiting-circles'

export function OrbitingCirclesDemo() {
	return (
		<div className="relative mx-auto flex bg-[#131316] w-[409px] h-[409px] h-full  flex-col items-center justify-center overflow-hidden border-2 border-[#404245] rounded-xl shadow-[0px_0px_8px_0px_rgba(255,255,255,0.09)_inset]">
			<OrbitingCircles radius={150} iconSize={40} speed={0.5}>
				<Icons.icon1 />
				<Icons.icon2 />
				<Icons.icon3 />
			</OrbitingCircles>
			<OrbitingCircles iconSize={30} radius={75} reverse speed={0.5}>
				<Icons.icon3 />
				<Icons.icon5 />
				<Icons.icon6 />
			</OrbitingCircles>
		</div>
	)
}

const Icons = {
	icon1: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="56"
			height="55"
			viewBox="0 0 56 55"
			fill="none"
			className="drop-shadow-sm shadow-black  rounded-full">
			<g clip-path="url(#clip0_2_2038)">
				<g filter="url(#filter0_f_2_2038)">
					<rect
						x="-17.22"
						y="5.78003"
						width="70.4538"
						height="70.4538"
						transform="rotate(-19.5839 -17.22 5.78003)"
						fill="url(#paint0_linear_2_2038)"
					/>
				</g>
				<rect
					x="0.800009"
					y="0.169912"
					width="54"
					height="54"
					rx="27"
					stroke="white"
					stroke-opacity="0.04"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_2038"
					x="-22.22"
					y="-22.8352"
					width="99.9933"
					height="99.9934"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.5"
						result="effect1_foregroundBlur_2_2038"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_2_2038"
					x1="-17.22"
					y1="76.2338"
					x2="53.2338"
					y2="5.78003"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#EBCC07" />
					<stop offset="0.333333" stop-color="#EDC664" />
					<stop offset="0.666667" stop-color="#FF6200" />
					<stop offset="1" stop-color="#FF0000" />
				</linearGradient>
				<clipPath id="clip0_2_2038">
					<rect
						x="0.299999"
						y="-0.330078"
						width="55"
						height="55"
						rx="27.5"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	),
	icon2: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="56"
			height="56"
			viewBox="0 0 56 56"
			fill="none">
			<g clip-path="url(#clip0_2_2044)">
				<g filter="url(#filter0_f_2_2044)">
					<rect
						x="-17.09"
						y="7.09009"
						width="70.4538"
						height="70.4571"
						transform="rotate(-19.5839 -17.09 7.09009)"
						fill="url(#paint0_linear_2_2044)"
					/>
				</g>
				<rect
					x="0.930003"
					y="1.47997"
					width="54"
					height="54"
					rx="27"
					stroke="white"
					stroke-opacity="0.04"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_2044"
					x="-22.09"
					y="-21.5251"
					width="99.9945"
					height="99.9966"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.5"
						result="effect1_foregroundBlur_2_2044"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_2_2044"
					x1="-17.09"
					y1="77.5472"
					x2="53.3671"
					y2="7.09344"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#EB0707" />
					<stop offset="0.333333" stop-color="#64B4ED" />
					<stop offset="0.666667" stop-color="#E600FF" />
					<stop offset="1" stop-color="#5500FF" />
				</linearGradient>
				<clipPath id="clip0_2_2044">
					<rect
						x="0.429993"
						y="0.97998"
						width="55"
						height="55"
						rx="27.5"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	),
	icon3: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="56"
			height="56"
			viewBox="0 0 56 56"
			fill="none">
			<g clip-path="url(#clip0_2_2050)">
				<g filter="url(#filter0_f_2_2050)">
					<rect
						x="-16.92"
						y="7.04004"
						width="70.4477"
						height="70.4444"
						transform="rotate(-19.5839 -16.92 7.04004)"
						fill="url(#paint0_linear_2_2050)"
					/>
				</g>
				<rect
					x="1.09001"
					y="1.42992"
					width="54"
					height="54"
					rx="27"
					stroke="white"
					stroke-opacity="0.04"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_2050"
					x="-21.92"
					y="-21.573"
					width="99.9845"
					height="99.9824"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.5"
						result="effect1_foregroundBlur_2_2050"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_2_2050"
					x1="-16.92"
					y1="77.4844"
					x2="53.5244"
					y2="7.03668"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#EBCC07" />
					<stop offset="0.333333" stop-color="#64ED6A" />
					<stop offset="0.666667" stop-color="#00EAFF" />
					<stop offset="1" stop-color="#002BFF" />
				</linearGradient>
				<clipPath id="clip0_2_2050">
					<rect
						x="0.589996"
						y="0.919922"
						width="55"
						height="55"
						rx="27.5"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	),
	icon4: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="31"
			height="32"
			viewBox="0 0 31 32"
			fill="none">
			<g clip-path="url(#clip0_2_2057)">
				<g filter="url(#filter0_f_2_2057)">
					<rect
						x="-7.25"
						y="5.5"
						width="36.769"
						height="36.7656"
						transform="rotate(-19.5815 -7.25 5.5)"
						fill="url(#paint0_linear_2_2057)"
					/>
				</g>
				<rect
					x="0.729985"
					y="1.15992"
					width="30"
					height="30"
					rx="15"
					stroke="white"
					stroke-opacity="0.04"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_2057"
					x="-12.25"
					y="-11.823"
					width="56.9644"
					height="56.9624"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.5"
						result="effect1_foregroundBlur_2_2057"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_2_2057"
					x1="-7.25"
					y1="42.2656"
					x2="29.5156"
					y2="5.49665"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#C2B66D" />
					<stop offset="0.333333" stop-color="#E3B44D" />
					<stop offset="0.666667" stop-color="#CCFFEB" />
					<stop offset="1" stop-color="#AA98D9" />
				</linearGradient>
				<clipPath id="clip0_2_2057">
					<rect
						x="0.229996"
						y="0.659912"
						width="31"
						height="31"
						rx="15.5"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	),
	icon5: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none">
			<g clip-path="url(#clip0_2_2069)">
				<g filter="url(#filter0_f_2_2069)">
					<rect
						x="-9.73001"
						y="4.12988"
						width="39.7072"
						height="39.7072"
						transform="rotate(-19.5815 -9.73001 4.12988)"
						fill="url(#paint0_linear_2_2069)"
					/>
				</g>
				<rect
					x="0.649983"
					y="1.17994"
					width="30"
					height="30"
					rx="15"
					stroke="white"
					stroke-opacity="0.04"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_2069"
					x="-14.73"
					y="-14.178"
					width="60.7186"
					height="60.7188"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.5"
						result="effect1_foregroundBlur_2_2069"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_2_2069"
					x1="-9.73001"
					y1="43.8371"
					x2="29.9772"
					y2="4.12988"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#07EB25" />
					<stop offset="0.5" stop-color="#ED64E2" />
					<stop offset="1" stop-color="white" />
				</linearGradient>
				<clipPath id="clip0_2_2069">
					<rect
						x="0.149994"
						y="0.679932"
						width="31"
						height="31"
						rx="15.5"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	),
	icon6: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none">
			<g clip-path="url(#clip0_2_2069)">
				<g filter="url(#filter0_f_2_2069)">
					<rect
						x="-9.73001"
						y="4.12988"
						width="39.7072"
						height="39.7072"
						transform="rotate(-19.5815 -9.73001 4.12988)"
						fill="url(#paint0_linear_2_2069)"
					/>
				</g>
				<rect
					x="0.649983"
					y="1.17994"
					width="30"
					height="30"
					rx="15"
					stroke="white"
					stroke-opacity="0.04"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_2_2069"
					x="-14.73"
					y="-14.178"
					width="60.7186"
					height="60.7188"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="2.5"
						result="effect1_foregroundBlur_2_2069"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_2_2069"
					x1="-9.73001"
					y1="43.8371"
					x2="29.9772"
					y2="4.12988"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#07EB25" />
					<stop offset="0.5" stop-color="#ED64E2" />
					<stop offset="1" stop-color="white" />
				</linearGradient>
				<clipPath id="clip0_2_2069">
					<rect
						x="0.149994"
						y="0.679932"
						width="31"
						height="31"
						rx="15.5"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	),
}
