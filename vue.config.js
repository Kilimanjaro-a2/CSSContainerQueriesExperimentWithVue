const uri = process.env.GITHUB_REPOSITORY.split("/")

module.exports = {
  publicPath: `https://${uri[0]}.github.io/${uri[1]}/`
}