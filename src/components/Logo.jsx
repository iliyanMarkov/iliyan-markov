import React from "react";

const Logo = ({ color, className }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-3.467 19.068 98.998 92.835"
		className={className}
	>
		<path
			style={{
				fill: "none",
				stroke: !!color ? color : "#8C2EF8",
				strokeWidth: "6.067",
				strokeMiterlimit: "10",
			}}
			d="M 78.683 84.903 C 74.817 84.903 71.683 88.037 71.683 91.903 C 71.683 95.769 74.817 98.903 78.683 98.903 C 82.549 98.903 85.683 95.769 85.683 91.903 C 85.683 88.037 82.549 84.903 78.683 84.903 Z"
			transform="matrix(1, 0, 0, 1, 7.105427357601002e-15, 0)"
		/>
		<g transform="matrix(1, 0, 0, 1, -203.82987057655646, -172.8390249263948)">
			<g>
				<g>
					<path
						style={{
							fill: "none",
							stroke: !!color ? color : "#8C2EF8",
							strokeWidth: "6.067",
							strokeMiterlimit: "10",
						}}
						d="M231.535,199.513        c-13.25,0-24.02,10.77-24.02,24.02v41.21c0,3.866,3.134,7,7,7h0c3.866,0,7-3.134,7-7v-40.855        c0-5.327,4.006-9.988,9.321-10.351c5.834-0.399,10.719,4.234,10.719,9.996l0.026,41.214c0.002,3.864,3.136,6.996,7,6.996h0        c3.868,0,7.002-3.137,7-7.004l-0.026-41.216"
					/>
				</g>
			</g>
			<g>
				<g>
					<path
						style={{
							fill: "none",
							stroke: !!color ? color : "#A65FFF",
							strokeWidth: "6.067",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeMiterlimit: "10",
						}}
						d="        M265.463,213.513c5.52,0,10.02,4.49,10.02,10.02l0.021,17.219c0.005,3.863,3.137,6.991,7,6.991l0,0        c3.869,0,7.005-3.139,7-7.009l-0.021-17.211c0-13.107-10.564-23.793-23.621-24.007c-13.429-0.22-24.419,11.132-24.419,24.563        v40.664c0,3.866,3.134,7,7,7h0c3.866,0,7-3.134,7-7v-41.21"
					/>
				</g>
			</g>
			<path
				style={{
					fill: "none",
					stroke: !!color ? color : "#A65FFF",
					strokeWidth: "6.067",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeMiterlimit: "10",
				}}
				d="      M255.555,223.523c0-13.24-10.78-24.01-24.02-24.01"
			/>
		</g>
	</svg>
);

export default Logo;
