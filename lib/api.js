const axios = require('axios')

axios.interceptors.response.use(
    res => {
      // 对响应数据进行处理
      return res.data;
    },
    error => {
      // 处理响应错误
      return Promise.reject(error);
    }
  );

/**
 * 
 * @returns 获取我的所有仓库
 */
async function getRepo() {
    return axios.get('https://api.github.com/users/Lshbosheth/repos')
}

async function getTagsByRepo(repo) {
    return axios.get(`https://api.github.com/repos/Lshbosheth/${repo}/tags`)
}

module.exports = {
    getRepo,
    getTagsByRepo
}