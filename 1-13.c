#include <stdio.h>

int main() {
    int c, n;
    int ndigit[10];

    n = 0;
    for (int i = 0; i < 10; i++)
        ndigit[i] = 0;
    while ((c = getchar()) != EOF) {
        if (c == ' ' || c == '\n' || c == '\t') {
            ndigit[n]++;
            n = 0;
        } else
            n++;
    }
    printf("digits =");
    for (int i = 0; i < 10; i++)
        printf(ndigit[i]);
    return 0;
}
