const Notifyer = {
     async init() {
       const permission = await Notification.requestPermission()
    if (permission !== "granted"){
        throw new Error ('Permissao negada')
    }
    },

    notify({title, body, icon}) {
        return () => new Notification (title, {
           body ,
           icon 
        })
    }
}

export {Notifyer}