# --------------------- Merge Sort ----------------------
def mergeSort(array):
    if len(array) >1: 
        # divide array in two halfs
        mid = len(array)//2
        L = array[:mid]
        R = array[mid:]
  
        # sort both halfs
        mergeSort(L)
        mergeSort(R) 
  
        i = j = k = 0

        # merge sorted halfs 
        while i < len(L) and j < len(R): 
            if L[i] < R[j]: 
                array[k] = L[i] 
                i+=1
            else: 
                array[k] = R[j] 
                j+=1
            k+=1
          
        # add any items left in the remaining half
        while i < len(L): 
            array[k] = L[i] 
            i+=1
            k+=1
          
        while j < len(R): 
            array[k] = R[j] 
            j+=1
            k+=1
    return array

# --------------------- Quick Sort ----------------------

# Take last element as pivot, put it in the destined spot
# in the sorted array and put smaller elements to the left 
# of the pivot and greater elements to right
def partition(array,low,high): 
    i = ( low-1 ) 
    pivot = array[high] 
  
    for j in range(low , high):  
        if   array[j] <= pivot: 
            i = i+1 
            array[i], array[j] = array[j], array[i] 
    array[i+1], array[high] = array[high],array[i+1] 
    return ( i+1 ) 

def qs(array,low,high): 
    if low < high:  
        pi = partition(array,low,high) 
        qs(array, low, pi-1) 
        qs(array, pi+1, high) 
    return array

def quickSort(array):
    return qs(array, 0, len(array)-1)

# --------------------- Heap Sort ----------------------
def heapify(arr, n, i): 
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2 

    if l < n and arr[i] < arr[l]: 
        largest = l 

    if r < n and arr[largest] < arr[r]: 
        largest = r 

    if largest != i: 
        arr[i],arr[largest] = arr[largest],arr[i]
        heapify(arr, n, largest) 

def heapSort(arr): 
    n = len(arr) 

    for i in range(n, -1, -1): 
        heapify(arr, n, i) 

    for i in range(n-1, 0, -1): 
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0) 
    return arr

# --------------------- Bubble Sort ----------------------
def bubbleSort(arr):
    ok = False
    while not ok:
        ok = True
        for i in range(0, len(arr)-1):
            if arr[i] > arr[i+1]:
                auxiliar = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = auxiliar
                ok = False
    return arr

# --------------------- Mutant Bubble Sort ----------------------
def mutantBubbleSort(arr):
    for i in range(0, len(arr)-1):
        for j in range(i+1, len(arr)):
            if arr[i] > arr[j]:
                auxiliar = arr[i]
                arr[i] = arr[j]
                arr[j] = auxiliar
    return arr

# --------------------- Radix Sort ----------------------
# A function to do counting sort of arr[] according to 
# the digit represented by exp. 
def countingSort(arr, exp1): 
  
    n = len(arr) 
  
    # The output array elements that will have sorted arr 
    output = [0] * (n) 
  
    # initialize count array as 0 
    count = [0] * (10) 
  
    # Store count of occurrences in count[] 
    for i in range(0, n): 
        index = (arr[i]//exp1) 
        count[ (index)%10 ] += 1
  
    # Change count[i] so that count[i] now contains actual 
    #  position of this digit in output array 
    for i in range(1,10): 
        count[i] += count[i-1] 
  
    # Build the output array 
    i = n-1
    while i>=0: 
        index = (arr[i]//exp1) 
        output[ count[ (index)%10 ] - 1] = arr[i] 
        count[ (index)%10 ] -= 1
        i -= 1
  
    # Copying the output array to arr[], 
    # so that arr now contains sorted numbers 
    i = 0
    for i in range(0,len(arr)): 
        arr[i] = output[i] 
  
# Method to do Radix Sort 
def radixSort(arr): 
  
    # Find the maximum number to know number of digits 
    max1 = max(arr) 
  
    # Do counting sort for every digit. Note that instead 
    # of passing digit number, exp is passed. exp is 10^i 
    # where i is current digit number 
    exp = 1
    while max1/exp > 0: 
        countingSort(arr,exp) 
        exp *= 10
    return arr

# --------------------- Cocktail Sort ----------------------
def cocktailSort(a): 
    n = len(a) 
    swapped = True
    start = 0
    end = n-1
    while (swapped==True): 
  
        # reset the swapped flag on entering the loop, 
        # because it might be true from a previous 
        # iteration. 
        swapped = False
  
        # loop from left to right same as the bubble 
        # sort 
        for i in range (start, end): 
            if (a[i] > a[i+1]) : 
                a[i], a[i+1]= a[i+1], a[i] 
                swapped=True
  
        # if nothing moved, then array is sorted. 
        if (swapped==False): 
            break
  
        # otherwise, reset the swapped flag so that it 
        # can be used in the next stage 
        swapped = False
  
        # move the end point back by one, because 
        # item at the end is in its rightful spot 
        end = end-1
  
        # from right to left, doing the same 
        # comparison as in the previous stage 
        for i in range(end-1, start-1,-1): 
            if (a[i] > a[i+1]): 
                a[i], a[i+1] = a[i+1], a[i] 
                swapped = True
  
        # increase the starting point, because 
        # the last stage would have moved the next 
        # smallest number to its rightful spot. 
        start = start+1
    return a

print(mergeSort([5, 7, 9, 12, 4, 6, 22]))
print(quickSort([5, 7, 9, 12, 4, 6, 22]))
print(heapSort([5, 7, 9, 12, 4, 6, 22]))
print(bubbleSort([5, 7, 9, 12, 4, 6, 22]))
print(mutantBubbleSort([5, 7, 9, 12, 4, 6, 22]))
print(radixSort([5, 7, 9, 12, 4, 6, 22]))
print(cocktailSort([5, 7, 9, 12, 4, 6, 22]))