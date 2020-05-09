export function isEmpty(obj) {
    if (typeof obj === 'undefined' || obj == null) {
        return true
    }
    if (obj instanceof Array) {
        return obj.length === 0
    }
    if (obj instanceof Object) {
        for (var attr in obj) {
            return false
        }
    }
    if (obj instanceof String || typeof obj === 'string') {
        return obj === ''
    }
    return false
}