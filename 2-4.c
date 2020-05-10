#include <stdio.h>

void squeeze(char s1[], char s2[]);

int main() {
    char s1[] = "abcdefg";
    char s2[] = "acdf";

    squeeze(s1, s2);
    printf("%s\n", s1);

    return 0;
}

void squeeze(char s1[], char s2[]) {
    int k = 0;
    int l = 0;
    for (int i = 0; s1[i] != '\0'; i++) {
        for (int j = 0; s2[j] != '\0'; j++) {
            if (s1[i] == s2[j])
                l = 1;
        }
        if (l == 0)
            s1[k++] = s1[i];
        l = 0;
    }
    s1[k] = '\0';
}
