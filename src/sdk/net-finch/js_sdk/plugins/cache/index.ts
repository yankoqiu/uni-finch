function CachePlugin(key: string): any {
    window.localStorage.setItem(key, JSON.stringify({}));
}

export default CachePlugin;
