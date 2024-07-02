// 2. Viết một hàm nhập vào 2 mảng A1 và A2, đầu ra trả về một mảng mới chứa các phần tử không trùng nhau của hai mảng kia.
//  Ví dụ A1 = [1, 2, "a"]; A2 = [1, 3, "b"] thì output ra được là [2, "a", "b", 3].

function uniqueElements(A1, A2) {
    let result = [];

    // duyệt mảng a1 để khác a2
    for (let element of A1) {
        if (!A2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }

    // duyệt mảng a2 để khác a1

    for (let element of A2) {
        if (!A1.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}

// Example usage:
const A1 = prompt("Mời bạn nhập a1");
const A2 = prompt("Mời bạn nhập a2");
const result = uniqueElements(A1, A2);
console.log(result);
