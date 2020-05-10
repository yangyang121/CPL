#include <stdio.h>

float transform(float f);

int main() {
    float f, c;
    int low, upper, step;

    low = 0;
    upper = 300;
    step = 20;

    for (f = low; f <= upper; f += step) {
        c = transform(f);
        printf("%3.0f %6.1f\n", f, c);
    }

    return 0;
}

float transform(float f) {
    float c = (5.0 / 9.0) * (f - 32.0);
    return c;
}
