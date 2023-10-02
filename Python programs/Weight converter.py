weight = int(input("Weight: "))
kg_or_lb = input("(K)g or (L)bs: ")
if kg_or_lb.upper() == "K":
    converted = weight / 0.45
    print("Weight in Lbs: " + str(converted))
else:
    converted = weight * 0.45
    print("Weight in KG: " + str(converted))


    