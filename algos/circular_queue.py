"""
Circular Queue implementation in python without counter variable
and without moving buckets in array

Makes use of queue size to dynamically change bounds of while loop 
CS31 approach 

O(1) add operation

11/21/2024
"""


# globals
next_val = 0 
queue_size = 0
MAX_SIZE = 10

def main():
    arr = [None] * MAX_SIZE
    while(True):
        val = input("give value to put in queue (or 'end' to quit): ")
        if val == "end":
            break
        add_queue(arr, val)
        print_queue(arr)
    
    print("final queue:")
    print_queue(arr)

def add_queue(arr, val):
    global next_val, queue_size
    arr[next_val%MAX_SIZE] = val
    next_val += 1
    queue_size = min(MAX_SIZE, queue_size + 1)

def print_queue(arr):
    global next_val, queue_size, count
    if next_val <= MAX_SIZE:
        i = 0
        end = queue_size
    else:
        i = next_val
        end = i + MAX_SIZE

    print("queue: \n")
    while i < end:
        print(i - MAX_SIZE + 1 if next_val>MAX_SIZE else i+1, arr[i%MAX_SIZE])
        i+=1
    
    print("\n")

if __name__ == "__main__":
    main()