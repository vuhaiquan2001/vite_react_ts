# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Version & Requirement

- [Node] use [^22.0.0]
- [Yarn] use [^1.22.22]

- [Vite] use [^6.0.3]
- [React] use [^18.3.1]

# Router

- [React-router-dom] use [^7.0.2]

# API & Fetch

- [Axios] use [^1.7.9] dùng để gửi request đến server
- [@tanstack/react-query] use [^5.62.11] dùng để quản lý state của request

# UI

- [Antd] use [^5.22.5]

# Chart

- [@ant-design/charts] use [^2.2.6] (https://ant-design-charts.antgroup.com/en/options/overview) cho thống kê hiển thị biểu đồ. (Có thể đổi sang reChart cho đơn giản)

# Bản đồ

- [react-leaflet] use [^4.2.1] (https://react-leaflet.js.org/) cho dịch vụ bản đồ. # Lưu ý từ ^5 trở lên không tương thích với react 18
- [leaflet] use [^1.9.4] dependencies của react-leaflet
- [@types/leaflet] use [^1.9.15] dependencies của react-leaflet để dùng trong typescript

# Directory structure

├── node_modules/ # Dependencies directory
├── public/ # Static assets directory
├── src/ # Source code directory
│ ├── assets/ # Project assets (images, fonts, etc.)
│ ├── components/ # Reusable React components
│ ├── layout/ # Layout components
│ ├── app/ # App
│ │ ├── api/ # App api.
│ │ ├── models/ # Typescript model, interface, etc.
│ │ ├── pages/ # App pages
│ │ └── stores/ # App context, provider, etc.
│ ├── routes/ # Routing configuration
│ ├── setting/ # Application settings (exemple: antd config provider global)
│ │ ├── AntdProvider.tsx # App Antd setting
│ │ └── index.scss # App Css base
│ ├── utils/ # Utility/Helper functions
│ ├── App.tsx # Main application component
│ ├── main.tsx # Application entry point
│ └── vite-env.d.ts # Vite environment declarations
├── .gitignore # Git ignore configuration
├── .prettierrc # Prettier code formatter configuration
├── eslint.config.js # ESLint configuration
├── index.html # HTML entry point
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
├── tsconfig.app.json # TypeScript configuration for app
├── tsconfig.json # Base TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node.js
└── vite.config.ts # Vite configuration file

# Run and Build

- [`Install all dependecies`]: yarn install
- [`Delete dependecies`]: yarn remove
- [`Add dependecies`]: yarn add
- [`Run`]: yarn dev
- [`Build`]: yarn build

# Recommend extention VS Code

Material Icon Theme
Prettier
Auto Close/Complete/Rename Tag
Auto Import
ESLint
htmltagwrap
