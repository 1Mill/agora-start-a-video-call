import { promisify } from 'util'

export const runPromisify = async (func, ...params) => {
	const res = await (promisify(func))(params)
	return res
}
