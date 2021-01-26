interface configType {
  baseUrl?: string
}

const config: configType = {
  baseUrl: process.env.BASE_URL
}

export default config