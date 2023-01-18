import styled from "styled-components";
import { colors, shadows } from "../../theme";

export const ButtonMain3 = styled.button`
	width: ${({ width }) => (width ? width : "")};
	height: ${({ height }) => (height ? height : "")};
	color: ${({ color }) => (color ? color : colors.white)};
	background: ${({ bgColor }) => (bgColor ? bgColor : colors.secondary600)};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
	border-radius: 1rem;
	padding: 14px 22px;
	outline: none;
	border: 1px solid transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	cursor: pointer;
	box-shadow: ${shadows.primary};
	transition: 0.15s ease-in-out;

	:hover {
		background: ${colors.secondary600};
		border: 1px solid ${colors.secondary700};
		color: ${colors.white};
		transform: scale(1.05);
	}

	:focus {
		border: 1px solid ${colors.secondary400};
	}

	:active {
		transform: translateY(1px);
	}

	//others children elements
	a {
		text-decoration: none;
	}
`;

//other button styles ---------------------------

export const ButtonMain2 = styled.button`
	align-items: center;
	background-color: ${colors.secondary500};
	border: 2px solid #111;
	border-radius: 14px;
	box-sizing: border-box;
	color: #111;
	cursor: pointer;
	display: flex;
	font-family: Inter, sans-serif;
	font-size: 16px;
	height: 48px;
	justify-content: center;
	line-height: 24px;
	max-width: 100%;
	padding: 0 25px;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;

	::after {
		background-color: #111;
		border-radius: 14px;
		content: "";
		display: block;
		height: 48px;
		left: 0;
		width: 100%;
		position: absolute;
		top: -2px;
		transform: translate(8px, 8px);
		transition: transform 0.2s ease-out;
		z-index: -1;
	}

	:hover::after {
		transform: translate(0, 0);
	}

	:active {
		background-color: #ffdeda;
		outline: 0;
	}

	:hover {
		outline: 0;
	}

	@media (min-width: 768px) {
		padding: 0 40px;
	}
`;

export const ButtonMain = styled.button`
	width: ${({ width }) => (width ? width : "")};
	height: ${({ height }) => (height ? height : "")};
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-weight: 500;
	padding: 14px 22px;
	height: 45px;
	position: relative;
	border: solid ${colors.secondary400} 2px;
	color: ${colors.white};
	z-index: 1;
	transition: all 0.3s ease-in-out;
	border-radius: 14px;
	background: ${colors.secondary500};

	:before {
		content: "";
		width: 0%;
		border-radius: 12px;
		height: 100%;
		position: absolute;
		top: 0;
		right: 50%;
		background-color: ${colors.secondary600};
		transition: 0.3s ease-in-out;
		z-index: -1;
	}

	:hover:before {
		width: 100%;
		right: 0%;
	}

	:hover {
		color: ${colors.white};
		border-color: ${colors.secondary500};
	}

	:active {
		color: ${colors.secondary400};
		border-color: ${colors.secondary400};
		background-color: ${colors.secondary400};
	}

	:active:before {
		background-color: ${colors.secondary400};
	}

	:focus {
		outline: none;
	}
`;
