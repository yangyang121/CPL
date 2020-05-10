//
// Created by Young on 2020/5/10.
//

#include <stdio.h>

int main() {
    int fahr, celsius;
    int lower, upper, step;

    lower = 0;
    upper = 300;
    step = 20;

    printf("摄氏度转华氏度逆序标题\n");
    for (celsius = upper; celsius >= lower; celsius -= step) {
        fahr = 9 * celsius / 5 + 32;
        printf("%3d %6d\n", celsius, fahr);
    }
    return 0;
}
