#include <stdio.h>

int main() {
    int c, show;
    show = 0;
    c = getchar();
    while (c != EOF) {
        if (c == ' ') {
            show++;
            if (show == 1) {
                putchar(c);
            }
        } else {
            show = 0;
            putchar(c);
        }
        c = getchar();
    }
    return 0;
}
