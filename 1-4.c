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

    printf("摄氏度转华氏度标题\n");
    celsius = lower;
    while (celsius <= upper) {
        fahr = 9 * celsius / 5 + 32;
        printf("%3d %6d\n", celsius, fahr);
        celsius += step;
    }
    return 0;
}
