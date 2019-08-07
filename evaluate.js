/**
 * Dijkstra 双栈算数表达式求值, 来自 <算法>(第四版) p80
 * @param {Array<string>} expressions 表达式
 * @returns Number 计算完成的结果
 */
function evaluate(expressions) {
	const ops = [];
	const vals = [];

	for (const char of expressions) {
		switch (char) {
			case '(':
			case ' ':
				// 忽略左侧括号和空格
				break;
			case '+':
			case '-':
			case '*':
			case '/':
			case 'sqrt':
				ops.push(char);
				break;
			case ')':
				// 遇到右括号进行计算
				let value = vals.pop();
				const operation = ops.pop();

				switch (operation) {
					case '+':
						value = vals.pop() + value;
						break;
					case '-':
						value = vals.pop() - value;
						break;
					case '*':
						value = vals.pop() * value;
						break;
					case '/':
						value = vals.pop() / value;
						break;
					case 'sqrt':
						value = Math.sqrt(value);
						break;
				}

				vals.push(value);
				break;
			default:
				// 其他的内容视为普通的数值字符
				vals.push(Number(char));
				break;
		}
	}

	// 返回计算完成后的值
	return vals.pop();

}


console.log(
	evaluate(`((1 + 2) * 5)`)
);

console.log(
	evaluate(['(','2','*','sqrt','(','5',')',')'])
);