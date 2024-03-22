const auxOperations = {
    getCurrentDate: function () {
        let currentDate = ('0' + new Date().getDate()).slice(-2) + '.' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '.' + new Date().getFullYear();
        return currentDate;
    }
}
export const getCurrentDate = auxOperations.getCurrentDate;