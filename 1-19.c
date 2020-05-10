#include <stdio.h>

int strLen(char s[]);

void reverse(char s[]);

int main() {
    char str[] = "hello world";
    reverse(str);
    return 0;
}

int strLen(char s[]) {
    int i;
    i = 0;
    while (s[i] != '\0')
        i++;
    return i;
}

void reverse(char s[]) {
    int len;
    len = strLen(s);
    while (len >= 0)
        printf("%c", s[len--]);
}
