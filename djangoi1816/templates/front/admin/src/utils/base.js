const base = {
    get() {
        return {
            url : "http://localhost:8080/djangoi1816/",
            name: "djangoi1816",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "协同过滤商品推荐系统"
        } 
    }
}
export default base
