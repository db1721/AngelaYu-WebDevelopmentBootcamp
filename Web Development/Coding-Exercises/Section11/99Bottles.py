def NinetyNineBottles():
    bottles = 99

    while bottles > 1:
        print("{0} bottles of beer on the wall, {1} bottles of beer take one down pass it around, {2} bottles of beer on the wall".format(bottles, bottles, bottles-1))
        bottles -=1
    print("1 bottle of beer on the wall, 1 bottle of beer",
            "take one down pass it around, No more bottles of beer on the wall")
    print("No more bottles of beer on the wall, No more bottles of beer",
            "go to the store and buy some more, 99 bottles of beer on the wall")
    
NinetyNineBottles()