export function createMockResponse(
  data: object,
  options: Partial<Response> = {}
): Response {
  return {
    json: () => new Promise((resolve) => resolve(data)),
    headers: new Headers({ 'Content-Type': 'application/json' }),
    ok: true,
    status: 200,
    redirected: false,
    ...options,
  } as Response
}
