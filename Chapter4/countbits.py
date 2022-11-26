def count_bits(x): 
    count = 0
    while x:
        count += x&1
        x >>=1
    return count

print(count_bits(1011))
