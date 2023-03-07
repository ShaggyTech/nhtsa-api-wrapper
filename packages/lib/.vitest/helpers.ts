export function createFetchGetResponse(data: object): Response {
  return {
    json: () => new Promise((resolve) => resolve(data)),
    headers: new Headers({ 'Content-Type': 'application/json' }),
    ok: true,
  } as unknown as Response
}
