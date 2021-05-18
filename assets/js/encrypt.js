function getResult() {
    switch (document.title) {
        case 'md5加密':
            md5Result()
            break
        case 'sha1加密':
            sha1Result()
            break
        case 'sha256加密' :
            sha256Result()
            break
        default:
            break
    }
}

function md5Result() {
    const originalValue = document.getElementById('inputValue').value
    if (originalValue == null || originalValue.trim() === '') {
        alert("数据不能为空")
    } else {
        const key = document.getElementById('inputKey').value
        if (key == null || key.trim === '') {
            document.getElementById('labelResult').value = md5(originalValue)
        } else {
            document.getElementById('labelResult').value = md5(originalValue, key)
        }
    }
}

function base64Result1() {
    const originalValue = document.getElementById('inputValue').value
    if (originalValue == null || originalValue.trim() === '') {
        document.getElementById('labelResult').value = "数据不能为空"
    } else {
        document.getElementById('labelResult').value = window.atob(originalValue)
    }
}

function base64Result() {
    const originalValue = document.getElementById('inputValue').value
    if (originalValue == null || originalValue.trim() === '') {
        document.getElementById('labelResult').value = "数据不能为空"
    } else {
        document.getElementById('labelResult').value = window.btoa(originalValue)
    }
}

function sha1Result() {
    const originalValue = document.getElementById('inputValue').value
    if (originalValue == null || originalValue.trim() === '') {
        alert("数据不能为空")
    } else {
        document.getElementById('labelResult').value = sha1(originalValue)
    }
}

function sha256Result() {
    const originalValue = document.getElementById('inputValue').value
    if (originalValue == null || originalValue.trim() === '') {
        alert("数据不能为空")
    } else {
        document.getElementById('labelResult').value = sha256(originalValue)
    }
}

function sha512Result() {
    const originalValue = document.getElementById('inputValue').value
    if (originalValue == null || originalValue.trim() === '') {
        alert("数据不能为空")
    } else {
        document.getElementById('labelResult').value = sha512(originalValue)
    }
}