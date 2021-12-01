def fizzbuzz():
    """
        Multiples of 3 print fizz, multiples of 5 print buzz
    """
    stringToPrint=""
    for x in range(100):
        if x % 3 != 0 or x % 5 != 0:
            if x % 3 == 0:
                stringToPrint += "Fizz"
            if x % 5 == 0:
                stringToPrint.append("Buzz")
        else:
            stringToPrint = str(x)
    print(stringToPrint)
fizzbuzz()