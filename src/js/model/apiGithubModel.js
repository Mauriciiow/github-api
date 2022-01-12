class apiModel{
    async recebeApi(nameRepository){
        const url = `https://api.github.com/users/${nameRepository}/repos`
        let response = await fetch(url).then(response => response.json());
        return response
    }
    
}