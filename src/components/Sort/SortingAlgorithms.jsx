const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function swap(bars, i, j) {
    let temp = bars[i].style.height
    bars[i].style.height = bars[j].style.height
    bars[j].style.height = temp
}

export async function bubbleSort(bars) {
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red'
            bars[j + 1].style.backgroundColor = 'red'
            const height1 = parseInt(bars[j].style.height.replace('px', ''))
            const height2 = parseInt(bars[j + 1].style.height.replace('px', ''))
            if (height1 > height2) {
                swap(bars, j, j + 1)
                await sleep(1000 / bars.length)
            }
            bars[j].style.backgroundColor = 'orange'
            bars[j + 1].style.backgroundColor = 'orange'
        }
    }
}

export async function insertionSort(bars) {
    let i, j, temp
    for (i = 1; i < bars.length; i++) {
        temp = parseInt(bars[i].style.height.replace('px', ''))
        j = i - 1
        while (j >= 0 && parseInt(bars[j].style.height.replace('px', '')) > temp) {
            bars[j].style.backgroundColor = 'red'
            bars[j + 1].style.backgroundColor = 'red'
            bars[j + 1].style.height = bars[j].style.height
            await sleep(1000 / bars.length)
            bars[j].style.backgroundColor = 'orange'
            bars[j + 1].style.backgroundColor = 'orange'
            j -= 1
        }
        bars[j + 1].style.height = `${temp}px`
        bars[j + 1].style.backgroundColor = 'orange'
    }
}

export async function selectionSort(bars) {
    let i, j, min

    for (i = 0; i < bars.length - 1; i++) {
        min = i
        for (j = i + 1; j < bars.length; j++) {
            if (parseInt(bars[j].style.height.replace('px', '')) < parseInt(bars[min].style.height.replace('px', ''))) {
                min = j
                bars[min].style.backgroundColor = 'red'
                await sleep(1000 / bars.length)
            }
        }

        bars[min].style.backgroundColor = 'red'
        bars[i].style.backgroundColor = 'red'

        swap(bars, i, min)

        await sleep(1000 / bars.length)

        bars[min].style.backgroundColor = 'orange'
        bars[i].style.backgroundColor = 'orange'
    }
}

async function merge(bars, l, m, r) {
    let n1 = m - l + 1
    let n2 = r - m

    let L = new Array(n1)
    let R = new Array(n2)

    for (let i = 0; i < n1; i++) {
        L[i] = parseInt(bars[l + i].style.height.replace('px', ''))
    }

    for (let j = 0; j < n2; j++) {
        R[j] = parseInt(bars[m + 1 + j].style.height.replace('px', ''))
    }

    let a = 0
    let b = 0
    let k = l

    while (a < n1 && b < n2) {
        if (L[a] <= R[b]) {
            bars[k].style.height = `${L[a]}px`
            a++
        }
        else {
            bars[k].style.height = `${R[b]}px`
            b++
        }
        bars[k].style.backgroundColor = 'red'
        await sleep(1000 / bars.length)
        k++
    }

    while (a < n1) {
        bars[k].style.backgroundColor = 'red'
        bars[k].style.height = `${L[a]}px`
        await sleep(1000 / bars.length)
        a++
        k++
    }

    while (b < n2) {
        bars[k].style.backgroundColor = 'red'
        bars[k].style.height = `${R[b]}px`
        await sleep(1000 / bars.length)
        b++
        k++
    }
}

export async function mergeSort(bars, l, r) {
    if (l >= r) {
        return
    }
    let m = l + parseInt((r - l) / 2)
    await mergeSort(bars, l, m)
    await mergeSort(bars, m + 1, r)
    await merge(bars, l, m, r)
}

async function heapify(bars, n, i) {
    let largest = i
    let l = 2 * i + 1
    let r = 2 * i + 2

    if (l < n && parseInt(bars[l].style.height.replace('px', '')) > parseInt(bars[largest].style.height.replace('px', ''))) {
        largest = l
    }

    if (r < n && parseInt(bars[r].style.height.replace('px', '')) > parseInt(bars[largest].style.height.replace('px', ''))) {
        largest = r
    }

    if (largest !== i) {
        bars[i].style.backgroundColor = 'red'
        bars[largest].style.backgroundColor = 'red'
        swap(bars, i, largest)
        await sleep(1000 / bars.length)
        bars[i].style.backgroundColor = 'orange'
        bars[largest].style.backgroundColor = 'orange'
        await heapify(bars, n, largest)
    }
}

export async function heapSort(bars) {
    let n = bars.length

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(bars, n, i)
    }

    for (let j = n - 1; j > 0; j--) {
        bars[0].style.backgroundColor = 'red'
        bars[j].style.backgroundColor = 'red'
        swap(bars, 0, j)
        await sleep(1000 / bars.length)
        bars[0].style.backgroundColor = 'orange'
        bars[j].style.backgroundColor = 'orange'

        await heapify(bars, j, 0)
    }
}

async function partition(bars, left, right) {
    let pivot = parseInt(bars[Math.floor((right + left) / 2)].style.height.replace('px', ''))
    let i = left
    let j = right

    while (i <= j) {
        while (parseInt(bars[i].style.height.replace('px', '')) < pivot) {
            i++
        }
        while (parseInt(bars[j].style.height.replace('px', '')) > pivot) {
            j--
        }
        if (i <= j) {
            swap(bars, i, j)
            i++
            j--
        }
    }
    return i
}

export async function quickSort(bars, left, right) {
    if (bars.length > 1) {
        let i = partition(bars, left, right)
        if (left < i - 1) {
            quickSort(bars, left, i - 1)
        }
        if (i < right) {
            quickSort(bars, i, right)
        }
    }
}
