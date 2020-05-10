#include <stdio.h>

void escape(char s[], char t[]);

void enescape(char s[], char t[]);

int main() {
    char s[] = "abcdefghijk";
    char t[] = "wor\\tld";
//    escape(s, t);
    enescape(s, t);

    printf("%s\n", s);

    return 0;
}

void escape(char s[], char t[]) {
    int i = 0;
    while (s[i] != '\0') {
        switch (t[i]) {
            case '\t':
                s[i++] = '\\';
                s[i++] = 't';
                break;
            default:
                s[i++] = t[i];
                break;
        }
    }
    s[i] = '\0';
}

void enescape(char s[], char t[]) {
    int i = 0;
    while (s[i] != '\0') {
        switch (t[i]) {
            case '\\':
                switch (t[i + 1]) {
                    case 't':
                        s[i++] = '\t';
                        break;
                    default:
                        s[i++] = '\\';
                }
                break;
            default:
                s[i++] = t[i];
                break;
        }
    }
    s[i] = '\0';
}
