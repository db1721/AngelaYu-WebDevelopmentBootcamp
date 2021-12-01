import time
def fizzbuzz():
    """
        Multiples of 3 print fizz, multiples of 5 print buzz
    """
    stringToPrint=[]
    for x in range(100):
        if x % 3 == 0 or x % 5 == 0:
            if x % 5 == 0 and x % 5 == 0:
                stringToPrint.append("FizzBuzz")
            elif x % 3 == 0:
                stringToPrint.append("Fizz")
            elif x % 5 == 0:
                stringToPrint.append("Buzz")
        else:
            stringToPrint.append(x)
    for x in stringToPrint:
        print(x)
        time.sleep(.3)
fizzbuzz()