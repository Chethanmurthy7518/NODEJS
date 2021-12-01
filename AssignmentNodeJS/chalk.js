const chalk = require('chalk');

console.log(chalk.blackBright('Hello world!'));
const log = console.log;

// Combine styled and normal strings
log(chalk.yellow('Hello') + ' World' + chalk.black('!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgYellow.bold('Hello world!'));



// Nest styles
log(chalk.red('Hello', chalk.underline.black('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));