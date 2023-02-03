 const config = {
    app: {
        name: "imgD Studio",
        description: "EnvProvider.value('DESC')",
        version: "v1.0.0"
    }
 }
 
//  const webWalletAddress="https://wallet-stage.hypersign.id"
 const webWalletAddress="http://localhost:4999/chrome/popup/popup#"
 const hostAddress='http://localhost:8080/#/'

 config['webWalletAddress']=webWalletAddress
config['hostAddress']=hostAddress

 export default config