## TypeScript 学习

##  一.   TypeScript 是什么 ？

![image-20210818231237366](/Users/taotao/Library/Application Support/typora-user-images/image-20210818231237366.png)

 

## 二.  TypeScript 增加了什么？

![image-20210818231706003](/Users/taotao/Library/Application Support/typora-user-images/image-20210818231706003.png)



## 三, 安装typescript 

<code>npm install typescript -g</code>

<code>查看版本号：tsc -v</code>


## 配置文件 生成 tsconfig.ts  文件
> 生成配置文件: <code>tsc --init</code>

``` ts
{
  "compilerOptions": {
    /* Basic Options 基本配置 */
    // "incremental": true,                         /* Enable incremental compilation 启用增量编译*/
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. 指定ecmascript目标版本：“es3”（默认）、“es5”、“es2015”、“es2016”、“es2017”、“es2018”、“es2019”、“es2020”、“es2021”或“esnext”。 */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. 指定模块代码生成：“无”、“commonjs”、“amd”、“系统”、“umd”、“es2015”、“es2020”或“ESNext”。*/
    // "lib": [],                                   /* Specify library files to be included in the compilation. 指定要包含在编译中的库文件。 */
    // "allowJs": true,                             /* Allow javascript files to be compiled.允许编译javascript文件。 */
    // "checkJs": true,                             /* Report errors in .js files. 报告.js文件中的错误。 */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'.  指定JSX代码生成：“保留”、“反应本机”、“反应”、“反应JSX”或“反应jsxdev”。*/
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. 生成相应的“.d.ts”文件。 */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. 为每个相应的“.d.ts”文件生成源映射。 */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. 生成相应的“.map”文件。 */
    // "outFile": "./",                             /* Concatenate and emit output to single file. 将输出连接并发射到单个文件。 */
    // "outDir": "./",                              /* Redirect output structure to the directory. 将输出结构重定向到目录。 */
    // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir.  指定输入文件的根目录。用于使用--outDir控制输出目录结构。*/
    // "composite": true,                           /* Enable project compilation  启用项目编译*/
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information  指定用于存储增量编译信息的文件*/
    // "removeComments": true,                      /* Do not emit comments to output. 不要输出注释。 */
    // "noEmit": true,                              /* Do not emit outputs. 不要发出输出。 */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. 从“tslib”导入发射帮助程序。*/
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. 针对“ES5”或“ES3”时，在“for of”、“spread”和“destructuring”中提供对iterables的全面支持。*/
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). 将每个文件作为单独的模块进行传输（类似于“ts.transpileModule”）。*/

    /* Strict Type-Checking Options 严格类型检查配置 */
    "strict": true,                                 /* Enable all strict type-checking options.  启用所有严格类型检查选项。*/
    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. 对隐含“any”类型的表达式和声明引发错误。*/
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types.  启用严格的空检查。*/
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. 对函数启用严格的“绑定”、“调用”和“应用”方法。 */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. 启用类中属性初始化的严格检查。 */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. 对隐含“any”类型的“this”表达式引发错误。 */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. 在严格模式下解析并为每个源文件发出“use strict”。 */

    /* Additional Checks 附加检查 */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. 报告未使用的局部变量的错误。 */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. 报告未使用参数的错误。*/
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. 函数中并非所有代码路径都返回值时报告错误。*/
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. 在switch语句中报告故障案例的错误。 */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results 在索引签名结果中包括“未定义” */
    // "noImplicitOverride": true,                  /* Ensure overriding members in derived classes are marked with an 'override' modifier. 确保使用“override”修饰符标记派生类中的重写成员。 */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses.  需要索引签名中未声明的属性才能使用元素访问。*/

    /* Module Resolution Options 模块分辨率配置*/
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6).  指定模块解析策略：“node”（node.js）或“classic”（TypeScript pre-1.6）。*/
    // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. 用于解析非绝对模块名称的基本目录。 */
    // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. 将导入重新映射到相对于“baseUrl”的查找位置的一系列条目。 */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. 其组合内容表示运行时项目结构的根文件夹列表。*/
    // "typeRoots": [],                             /* List of folders to include type definitions from. 要从中包含类型定义的文件夹列表。*/
    // "types": [],                                 /* Type declaration files to be included in compilation. 要包含在编译中的类型声明文件。*/
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. 允许从没有默认导出的模块进行默认导入。这不会影响代码的发出，只是类型检查。 */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. 通过为所有导入创建命名空间对象，实现CommonJS和ES模块之间的互操作性。暗示“allowSyntheticDefaultImports”。*/
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. 不要解析符号链接的实际路径。*/
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. 允许从模块访问UMD全局*/

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. 指定调试器应定位TypeScript文件而不是源位置的位置。 */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. 指定调试器应定位映射文件的位置，而不是生成的位置。 */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file.  发射带有源贴图的单个文件，而不是单独的文件。 */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. 在单个文件中沿sourcemaps发射源；需要设置“--inlineSourceMap”或“--sourceMap”。 */

    /* Experimental Options 实验配置 */
    // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. 启用对ES7装饰器的实验性支持。 */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. 启用对为装饰器发出类型元数据的实验性支持*/

    /* Advanced Options 高级配置 */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. 跳过声明文件的类型检查 */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. 不允许对同一文件进行大小写不一致的引用。 */
  }
}

```

## 原始类型











