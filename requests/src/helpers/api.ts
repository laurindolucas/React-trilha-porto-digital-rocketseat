export const fetcher = (url: string) => fetch(`http://localhost:3000${url}`).then((res) => res.json());

export const api = (url: string, optiopns: RequestInit = {}) => fetch(`http://localhost:3000${url}`, optiopns).then((res) => res.json());