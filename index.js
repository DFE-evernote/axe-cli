const { program } = require('commander')
const chalk = require('chalk')

program
  .name(chalk.cyan('axe-cli'))
  .description(chalk.red.bold(`小石头的斧子宇宙之 ${chalk.bgRed(' axe-cli ')} 脚手架`))
  .version('0.0.1')
  .usage(chalk.cyan('<command> [options]'));

program.command('create')
  .argument('<name>', '文件名字') // <name> 表 name 为必填
  .description(chalk.green('# 生成一个页面')) // 命令描述
  .action((name) => { // 输入该命令的动作，逻辑实现。
    console.log(chalk.green(`新建了一个文件：${chalk.blue(name)}`));
  });

program.parse();