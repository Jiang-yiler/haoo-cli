const inquirer = require('inquirer')

async function chooseTemplate(){
    const promptList = [
        {
            type: "list", // type决定交互的方式，比如当值为input的时候就是输入的形式，list就是单选，checkbox是多选...
            name: "template",
            message: "选择一个需要创建的工程化模板",
            choices: [
                {
                    name: "vue2-default (js版本的vue2全家桶工程化模板)",
                    value: "vue2-template-default",
                }
            ],
        },
    ];
    const answers = await inquirer.prompt(promptList);  // 执行命令行交互，并将交互的结果返回
    const {template} = answers
    console.log(`你选择的模板是：${template}`)
    return template  // 返回我们选择的模板
}

module.exports = {
    chooseTemplate
}
