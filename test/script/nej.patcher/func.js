function(_c,_e){
    var _localStorage;
    /*
     * ��ʼ�����ش洢ϵͳ
     * @return {Void}
     */
    var _doInitFlash = function(){
        if (!!_localStorage) return;
        // append storage flash
        _e._$flash({
            hidden:!0,
            src:_c._$get('storage.swf'),
            params:{
                AllowScriptAccess:'sameDomain'
            },
            onready:function(_flash){
                if (!_flash){
                    console.log('flash for localStorage unavailable');
                }else{
                    _localStorage = _flash;
                    _localStorage.initStorage('nej-storage');
                }
                _v._$dispatchEvent(document,'storageready');
            }
        });
    };
    /**
     * ȡ������Ϣ
     * @param  {String} �����ʶ
     * @return {String} ������Ϣ
     */
    _h.__getItemInStorage = function(_key){
        if (!!_localStorage){
            return _localStorage.getItem(_key);
        }
    };
    /**
     * ���û�����Ϣ
     * @param  {String} �����ʶ
     * @param  {String} ������Ϣ
     * @return {Void}
     */
    _h.__setItemToStorage = function(_key,_value){
        if (!!_localStorage){
            _localStorage.setItem(_key,_value);
        }
    };
    /**
     * ɾ��������Ϣ
     * @param  {String} �����ʶ
     * @return {Void}
     */
    _h.__removeItemFromStorage = function(_key){
        if (!!_localStorage){
            _localStorage.removeItem(_key);
        }
    };
    /**
     * �������
     * @return {Void}
     */
    _h.__clearStorage = function(){
        if (!!_localStorage){
            _localStorage.clear();
        }
    };
    /**
     * ��ʼ�����ش洢ϵͳ
     * @return {Void}
     */
    _h.__initStorage = function(){
        _doInitFlash();
    };
    /**
     * ��Ȿ�ش洢ϵͳ�Ƿ�׼�����
     * @return {Boolean} �Ƿ�׼�����
     */
    _h.__isStorageReady = function(){
        return !!_localStorage;
    };
}