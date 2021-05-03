import request from '@/utils/request'
import Vue from 'vue'

export default {
    // list path
    async list(path) {
      const { data } = await request.get(`${Vue.prototype.$Config.endpoints.wiener}/api/execute/listfolderbase64`, {
        params: {
            folderpath: btoa(path)
        }
      })
      return data
    },
      
    // make dir
    async mkdir(path) {
        const { data } = await request.get(`${Vue.prototype.$Config.endpoints.wiener}/api/execute/makedirbase64`, {
            params: {
                folderpath: btoa(path)
            }
        })
        return data
    },

    //delete a path
    async delete(path) {
        const { data } = await request.get(`${Vue.prototype.$Config.endpoints.wiener}/api/execute/deletebase64`, {
            params: {
                fileslist: btoa(path)
            }
        })
        return data
    },

    // copy folder
    async copy(usermail, sources, dest, parallel) {
        const { data } = await request.get(`${Vue.prototype.$Config.endpoints.wiener}/api/execute/copybase64`, {
            params: {
                usermail: usermail,
                sources: btoa(sources),
                dest: btoa(dest),
                parallel: parallel
            }
        })
        return data
    },
    //read text file
    async readTextFile(filepath) {
        const { data } = await request.get(`${Vue.prototype.$Config.endpoints.wiener}/api/execute/readtextfile`, {
            params: {
                filepath: filepath
            }
        })
        return data
    },
}
  