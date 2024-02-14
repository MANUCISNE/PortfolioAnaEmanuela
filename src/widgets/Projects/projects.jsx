import ToDoTheList from "~/shared/assets/todo.svg"
import ToDoTheListDark from "~/shared/assets/todo-dark.svg"

import LandPageIfood from "~/shared/assets/ifood-page.svg"
import LandPageIfoodDark from "~/shared/assets/ifood-page-dark.svg"

import PetSocialNetwork from "~/shared/assets/toon.webp"
import PetSocialNetworkDark from "~/shared/assets/toon-dark.webp"

import WorkTime from "~/shared/assets/weather.webp"
import WorkTimeDark from "~/shared/assets/weather-dark.webp"

import EcommerceTechProducts from "~/shared/assets/metaverse.webp"
import EcommerceTechProductsDark from "~/shared/assets/metaverse-dark.webp"

import FlexBlog from "~/shared/assets/ingrad.webp"
import FlexBlogDark from "~/shared/assets/ingrad-dark.webp"

import Portfolio from "~/shared/assets/portfolio.webp"
import PortfolioDark from "~/shared/assets/portfolio-dark.webp"

export const projects = (mode) => {
	const projectsData = [
		{
			name: "ToDoTheList",
			title: "ToDoTheList website",
			description: "Este é um projeto desenvolvido em JavaScript, HTML e CSS como parte do módulo, com o objetivo de criar uma aplicação de lista de tarefas (ToDo List) utilizando os conceitos abordados. O projeto foi apresentado com sucesso no Ifood Intership Frontend 2024.",
			descriptionRu: "This is a project developed in JavaScript, HTML and CSS as part of the module, with the objective of creating a to-do list application (ToDo List) using the concepts covered. The project was successfully presented on Ifood Intership Frontend 2024.",
			stack: "HTML, Javascript, CSS",
			img: <img src={!mode ? ToDoTheList : ToDoTheListDark} alt="ToDoTheList on different devices" />,
			mainLink: "https://to-do-the-list-js.vercel.app/",
			gitLink: "https://github.com/MANUCISNE/ToDoTheList---JS",
		},
		{
			name: "LandPage Ifood",
			title: "IFood Renewed Project [LIMITED FUNCTIONALITY]",
			description: "Desenvolvido como parte da turma #VemSerTech em parceria com o iFood e a Ada. O iFood Renovado é uma proposta de website que busca aprimorar a experiência dos usuários ao encomendar comida online. O projeto se concentra em tornar a plataforma mais atraente, acessível e funcional.",
			descriptionRu:
				"Developed as part of the #VemSerTech class in partnership with iFood and Ada. iFood Renovado is a website proposal that seeks to improve users' experience when ordering food online. The project focuses on making the platform more attractive, accessible and functional.",
			stack: "SCSS, HTML, CSS, JavaScript",
			img: <img src={!mode ? LandPageIfood : LandPageIfoodDark} alt="IFood Renewed Project view on different devices" />,
			mainLink: "https://landpage-ifood.vercel.app/",
			gitLink: "https://github.com/MANUCISNE/Landpage-Ifood-",
		},
		{
			name: "Pet Social Network (dogs)",
			title: "Pet Social Network Landing Page",
			description: "Desenvolvido como parte do curso Rocketseat Ignite, este site é elaborado em React e Javascript. Funciona como uma rede social dedicada aos animais de estimação, oferecendo uma plataforma única para os entusiastas dos animais de estimação se conectarem e compartilharem as aventuras de seus amigos peludos.",
			descriptionRu: "Developed as part of the Rocketseat Ignite course, this website is crafted using React and Javascript. It serves as a social network dedicated to pets, offering a unique platform for pet enthusiasts to connect and share their furry friends' adventures.",
			stack: "React, HTML, CSS, JavaScript",
			img: <img src={!mode ? PetSocialNetwork : PetSocialNetworkDark} alt="Pet Social Network landing view on different devices" />,
			mainLink: "https://site-dogs-react-js.vercel.app/",
			gitLink: "https://github.com/MANUCISNE/Site-Dogs-React-JS",
		},
		{
			name: "Work Time",
			title: "Work Time - Timer App",
			description: "Este projeto é um aplicativo desenvolvido utilizando React e TypeScript, projetado especificamente para auxiliar no uso da Técnica Pomodoro. A Técnica Pomodoro é uma abordagem de gerenciamento de tempo que envolve a divisão do trabalho em intervalos chamados pomodoros, geralmente de 25 minutos, seguidos por pausas curtas.",
			descriptionRu:
				"This project is an application developed using React and TypeScript, designed specifically to assist in the use of the Pomodoro Technique. The Pomodoro Technique is a time management approach that involves dividing work into intervals called pomodoros, usually 25 minutes, followed by short breaks.",
			stack: "React, Typescript, Vite",
			img: <img src={!mode ? WorkTime : WorkTimeDark} alt="Work Time view on different devices" />,
			mainLink: "https://work-time-seven.vercel.app/",
			gitLink: "https://github.com/MANUCISNE/Work-time--",
		},
		{
			name: "E-commerce Technological Products",
			title: "E-commerce Development Project for Technological Products - Freelancer",
			description:
				"O escopo deste projeto compreende a concepção e implementação de uma plataforma de comércio eletrônico dedicada a um empreendedor de pequeno porte especializado em produtos tecnológicos. Este empreendimento digital, desenvolvido como um trabalho freelancer, tem como principal objetivo aprimorar a presença online do vendedor, oferecendo uma experiência de compra eficiente e profissional aos clientes.",
			descriptionRu:
				"The scope of this project includes the design and implementation of an e-commerce platform dedicated to a small entrepreneur specializing in technological products. This digital venture, developed as a freelance work, has the main objective of improving the seller's online presence, offering an efficient and professional shopping experience to customers.",

			stack: "React, Javascript, Next, TypeScript, Axios, Styled-Components",
			img: <img src={!mode ? EcommerceTechProducts : EcommerceTechProductsDark} alt="E-commerce Technological Products view on different devices" />,
			mainLink: "https://front-end-apple-products.vercel.app",
			gitLink: "https://github.com/MANUCISNE/FrontEnd---appleProducts",
		},
		{
			name: "FlexBlog",
			title: "Application Project - FlexBlog",
			description:
				"Este projeto foi concebido como parte integrante do curso de Frontend ministrado pela Origamid, com foco específico no aprimoramento das habilidades relacionadas ao modelo de layout Flexbox. Trata-se de um aplicativo desenvolvido com o propósito principal de proporcionar treinamento prático e aprofundado nos conceitos fundamentais do Flexbox, um componente essencial para a construção de layouts flexíveis e responsivos.",
			descriptionRu:
				"This project was conceived as an integral part of the Frontend course taught by Origamid, with a specific focus on improving skills related to the Flexbox layout model. It is an application developed with the main purpose of providing practical and in-depth training in the fundamental concepts of Flexbox, an essential component for building flexible and responsive layouts.",
			stack: "HTML, CSS, Flexbox",
			img: <img src={!mode ? FlexBlog : FlexBlogDark} alt="FlexBlog website view on different devices" />,
			mainLink: "https://flex-blog-concepts-of-flex-box.vercel.app/",
			gitLink: "https://github.com/MANUCISNE/FlexBlog---Concepts-of-FlexBox",
		},
		{
			name: "Portfolio",
			title: "Personal Portfolio Website",
			description:
				"Site de portfólio baseado em React feito com a ferramenta de construção Vite. Inclui carregamento lento, alternador de tema claro/escuro, internacionalização e dependências adicionais, como react-scroll, react-icons e integração com Express e Node. A arquitetura do aplicativo é baseada em Feature-Sliced Design",
			descriptionRu:
				"React based portfolio website made with Vite build tool.Includes Lazy loading, light/ dark theme switcher, internationalization and additional dependencies such as react - scroll, react - icons, and integration with Express and Node.App architecture is based on Feature - Sliced Design.",
			stack: "React, Javascript, CSS modules, Vite, FSD, i18n",
			img: <img src={!mode ? Portfolio : PortfolioDark} alt="Portfolio website view on different devices" />,
			mainLink: "https://portfolio-ana-emanuela.vercel.app/#about",
			gitLink: "https://github.com/MANUCISNE/PortfolioAnaEmanuela",
		},
	]

	return projectsData
}
