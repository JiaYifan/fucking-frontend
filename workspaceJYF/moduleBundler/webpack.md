## 过程
根据配置和命令行的参数，初始化complier并run compiler，从entry配置的入口文件开始，用配置的loader翻译，通过模块的依赖关系依次对各模块进行翻译，得出chunck，放到输出列表，这时可以修改输出的内容，最后将chunck输出到文件系。
