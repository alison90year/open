# 全局安装

```
npm install -g webpack webpack-cli typescript tslint gulp
```

# 安装 vsCode 插件

- Document This
- GitLens — Git supercharged
- Git History
- HTML Snippets
- JavaScript (ES6) code snippets
- Prettier - Code formatter
- TSLint
- TSLint Vue
- vue
- Vue 3 Snippets
- Vetur
- Vue VSCode Snippets

# 项目启动

```bash
npm install or yarn install
npm run start
```

# 启动/打包 终端参数

- -- THEME 模板
- -- SITE 站点
- -- ENVI 环境变量

## 启动/打包 传惨示例

### 开发环境

```bash
npm run start -- --THEME temp1 --SITE site1 --ENVI dev
```

### 生产环境

```bash
npm run build -- --THEME temp1 --SITE site1 --ENVI prod
```

# webp 使用方式

## .vue 文件

```javascript
<img src='/assets/x.png' v-webp />
```

## .scss 文件

```sass
@include webp('/assets/x.png');
```

# rem 换算

🌰：基于 iphone6 375 \* 667 设计稿 18px

```sass
font-size: Rem(18rem);
```
