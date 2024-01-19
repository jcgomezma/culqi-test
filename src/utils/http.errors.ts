export interface HttpError {
	statusCode: number,
	message: string,
}

export const BAD_REQUEST = (message?: string): HttpError => {
	return {
		statusCode: 400,
		message: message || `Bad request exception`
	}
}

export const NOT_FOUND = (entity: string) => {
	return {
		statusCode: 404,
		message: `${ entity } not found`,
	}
}
